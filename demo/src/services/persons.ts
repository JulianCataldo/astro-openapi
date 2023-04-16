/* eslint-disable no-param-reassign */
import type { AstroOperationHandler } from '@astro-openapi/backend';
import { faker } from '@faker-js/faker';
import type { Paths, Components } from 'astro-openapi:types';
// import { prisma } from '../lib/db-client';

function personMock(id = Math.round(Math.random() * 128)) {
	const person: Components.Schemas.Person = {
		id,
		name: faker.name.fullName(),
		email: faker.internet.email(),
		position: faker.name.jobTitle(),
		country: faker.address.country(),
	};
	return person;
}

/* ========================================================================== */

/* FIND MANY */
export const findPersons: AstroOperationHandler<
	undefined,
	undefined,
	Paths.FindPersons.QueryParameters
> = (openapi, _astro) => {
	const result = new Array(128)
		.fill(null)
		.map(() => personMock())
		.slice(0, openapi?.request.query.limit);

	return {
		body: JSON.stringify(result),
		status: 200,
	};
};

/* ADD SINGLE */
/* —————————————————————————————————————————————————————————————————————————— */

export const addPerson: AstroOperationHandler<
	Paths.AddPerson.RequestBody,
	undefined
> = (openapi, _astro) => {
	const data = {
		name: openapi?.request.requestBody.name ?? '',
		email: `jsjs${Math.random()}`,
		// lala: openapi?.request.requestBody.foo ?? '',
	};
	const res = { body: JSON.stringify(data), status: 200 };

	// E.g from DB…
	const created = { id: Math.round(Math.random() * 100), ...data };

	const valid = openapi?.api.validateResponse(
		created,
		openapi.operation,
		res.status,
	);
	if (valid?.errors)
		return {
			body: JSON.stringify({
				code: 123,
				message: 'Failed',
				errors: valid.errors,
			}),
			status: 502,
		};

	return res;
};

/* DELETE SINGLE */
/* —————————————————————————————————————————————————————————————————————————— */

export const deletePerson: AstroOperationHandler<
	undefined,
	Paths.DeletePerson.PathParameters
> = (openapi, _astro) => {
	console.log('a');

	const res = {
		code: 123,
		message: 'DELETED',
		...openapi?.request.params,
	};
	const valid = openapi?.api.validateResponse(
		//
		res,
		openapi.operation,
		200,
	);

	if (valid?.errors) {
		return {
			body: JSON.stringify({
				code: 0,
				message: 'Oh no',
				errors: valid.errors,
			}),
			status: 502,
		};
	}

	return {
		body: JSON.stringify(res),

		status: 200,
	};
};

/* FIND SINGLE */
/* —————————————————————————————————————————————————————————————————————————— */

export const findPersonById: AstroOperationHandler<
	undefined,
	Paths.FindPersonById.PathParameters
> = (openapi, _astro) => {
	console.log('a');

	/* Find in DB,… */
	const id = openapi?.request.params.id;
	const person = personMock(id);

	console.log({ person, id });

	if (person)
		return {
			body: JSON.stringify(person),
			status: 200,
		};

	return {
		body: JSON.stringify({ error: 'not found' }),
		status: 404,
	};
};
