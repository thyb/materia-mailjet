const MailjetSender = require('../../lib/mailjet')

class MailjetCampaign {
	constructor(app, entity) {
		this.app = app;
		this.entity = entity;
        this.mailjetLib = new MailjetSender(app.addons.addonsConfig['@materia/mailjet'].apikey, app.addons.addonsConfig['@materia/mailjet'].secret, app.addons.addonsConfig['@materia/mailjet'].from, app.addons.addonsConfig['@materia/mailjet'].name);
        this.mailjet = this.mailjetLib.mailjet;
	}

	list() {
		var campaign = this.mailjet.get('campaign');
		return campaign.request()
        .then((result) => {
			return result.body.Data;
		})
	}
}

module.exports = MailjetCampaign;
