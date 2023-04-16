import type { OperationMethods } from 'astro-openapi:types';
import { client } from '@astro-openapi/client/app';

export const tagName = 'data-operations';

export class DataOperations extends HTMLElement {
	static scaffold = {
		requestBody: null,
		params: null,
		query: null,
		headers: null,
		cookies: null,
	} as const;

	connectedCallback() {
		this.addEventListener('click', (e) => {
			this.refresh(e).catch(undefined);
		});
	}

	// eslint-disable-next-line class-methods-use-this
	async refresh(e: Event) {
		const action = e.target as HTMLElement;

		const queryElem = action
			.closest('section')!
			.querySelector<HTMLTextAreaElement>('[data-query]');

		// eslint-disable-next-line prefer-destructuring
		const operation = action.dataset.operation;
		if (!operation || !(operation in client)) return;
		const op = operation as keyof OperationMethods;

		const displayElem = action
			.closest('section')!
			.querySelector<HTMLElement>('[data-display]');

		console.log({ value: queryElem!.value, queryElem });

		const args = JSON.parse(queryElem!.value) as typeof DataOperations.scaffold;

		const p = await client[op](args.params, args.requestBody).then(
			({ data }) => data,
		);

		displayElem!.innerText = JSON.stringify(p, null, 2);
		console.log({ operationDump: p });
	}
}
customElements.define(tagName, DataOperations);

declare global {
	interface HTMLElementTagNameMap {
		[tagName]: DataOperations;
	}
}
