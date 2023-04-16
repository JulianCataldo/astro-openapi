import SwaggerUI from 'swagger-ui';

// @ts-expect-error ...
import swaggerBaseStyles from 'swagger-ui/dist/swagger-ui.css?url';
// @ts-expect-error ...
import swaggerDarkModeOverrides from './lib/swagger-dark/swagger-dark.css?url';

class OpenApiGui extends HTMLElement {
	connectedCallback() {
		const { url } = this.dataset;
		if (!url) return;

		const shadowClosed = this.attachShadow({ mode: 'closed' });

		const container = document.createElement('div');

		const stylesBase = document.createElement('link');
		stylesBase.rel = 'stylesheet';
		stylesBase.href = swaggerBaseStyles;
		const stylesDark = document.createElement('link');
		stylesDark.rel = 'stylesheet';
		stylesDark.href = swaggerDarkModeOverrides;

		shadowClosed.append(stylesBase);
		shadowClosed.append(stylesDark);

		shadowClosed.append(container);
		SwaggerUI({ url, domNode: container });
	}
}

customElements.define('open-api-gui', OpenApiGui);
