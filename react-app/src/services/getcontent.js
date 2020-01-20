import jGet from "./conectapi";

export const filterTextFormat = (description) => {
	return description = description.split('/sites/default/files/').join(process.env.REACT_APP_URLBACK + '/sites/default/files/')
}

export const getNodeTypeByUrl = (info) => {
	if (info.typeContent) {
		// If the url doesnt exist, it uses the Current url
		if (!info.url) {
			info.url = window.location.pathname;
		}
		jGet({
			url: '/jsonapi/node/' + info.typeContent,
			withToken: true,
			then: (response) => {
			  for (let numData in response.data) {
					let data = response.data[numData];
					if (data.attributes.path.alias && data.attributes.path.alias === info.url) {
						let commonFields = {
							title: data.attributes.title,
							summary: data.attributes.summary ? data.attributes.body.summary : '',
							body: data.attributes.body && data.attributes.body.value ? data.attributes.body.value : ''
						};
						info.then(data.attributes, commonFields);
					}
				}
				if (info.err) {
					info.err(response);
				}
			},
			err: (response) => {
				if (info.err) {
					info.err(response);
				}
			}
		});
	}
}

export const getNodByUuid = (info) => {
	if (info.typeContent) {
		jGet({
			url: '/jsonapi/node/' + info.typeContent + '/' + info.uuid,
			withToken: true,
			then: (response) => {
        let data = response.data;
        let commonFields = {
          title: data.attributes.title,
          summary: data.attributes.body.summary ? data.attributes.body.summary : '',
          body: data.attributes.body.value ? data.attributes.body.value : ''
        };
        info.then(data.attributes, commonFields);
			},
			err: (response) => {
				if (info.err) {
					info.err(response);
				}
			}
		});
	}
}