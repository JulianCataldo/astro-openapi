declare module 'astro-openapi:types' {
	import type {
		OpenAPIClient,
		Parameters,
		UnknownParamsObject,
		OperationResponse,
		AxiosRequestConfig,
	} from 'openapi-client-axios';
	declare namespace Components {
		namespace Schemas {
			export interface Error {
				code: number; // int32
				message: string;
			}
			export interface NewPerson {
				id: number; // int64
				name?: string;
				email?: string;
				position?: string;
				country?: string;
			}
			export type Person = NewPerson;
		}
	}
	declare namespace Paths {
		namespace AddPerson {
			export type RequestBody = Components.Schemas.NewPerson;
			namespace Responses {
				export type $200 = Components.Schemas.NewPerson;
				export type Default = Components.Schemas.Error;
			}
		}
		namespace DeletePerson {
			namespace Parameters {
				export type Id = number; // int64
			}
			export interface PathParameters {
				id: Parameters.Id /* int64 */;
			}
			namespace Responses {
				export interface $204 {}
				export type Default = Components.Schemas.Error;
			}
		}
		namespace FindPersonById {
			namespace Parameters {
				export type Id = number; // int64
			}
			export interface PathParameters {
				id: Parameters.Id /* int64 */;
			}
			namespace Responses {
				export type $200 = Components.Schemas.NewPerson;
				export type Default = Components.Schemas.Error;
			}
		}
		namespace FindPersons {
			namespace Parameters {
				export type Limit = number; // int32
				export type Tags = string[];
			}
			export interface QueryParameters {
				tags?: Parameters.Tags;
				limit?: Parameters.Limit /* int32 */;
			}
			namespace Responses {
				export type $200 = Components.Schemas.NewPerson[];
				export type Default = Components.Schemas.Error;
			}
		}
	}

	export interface OperationMethods {
		/**
		 * findPersons - Returns all persons from the system that the user has access to
		 * Nam sed condimentum est. Maecenas tempor sagittis sapien, nec rhoncus sem sagittis sit amet. Aenean at gravida augue, ac iaculis sem. Curabitur odio lorem, ornare eget elementum nec, cursus id lectus. Duis mi turpis, pulvinar ac eros ac, tincidunt varius justo. In hac habitasse platea dictumst. Integer at adipiscing ante, a sagittis ligula. Aenean pharetra tempor ante molestie imperdiet. Vivamus id aliquam diam. Cras quis velit non tortor eleifend sagittis. Praesent at enim pharetra urna volutpat venenatis eget eget mauris. In eleifend fermentum facilisis. Praesent enim enim, gravida ac sodales sed, placerat id erat. Suspendisse lacus dolor, consectetur non augue vel, vehicula interdum libero. Morbi euismod sagittis libero sed lacinia.
		 *
		 * Sed tempus felis lobortis leo pulvinar rutrum. Nam mattis velit nisl, eu condimentum ligula luctus nec. Phasellus semper velit eget aliquet faucibus. In a mattis elit. Phasellus vel urna viverra, condimentum lorem id, rhoncus nibh. Ut pellentesque posuere elementum. Sed a varius odio. Morbi rhoncus ligula libero, vel eleifend nunc tristique vitae. Fusce et sem dui. Aenean nec scelerisque tortor. Fusce malesuada accumsan magna vel tempus. Quisque mollis felis eu dolor tristique, sit amet auctor felis gravida. Sed libero lorem, molestie sed nisl in, accumsan tempor nisi. Fusce sollicitudin massa ut lacinia mattis. Sed vel eleifend lorem. Pellentesque vitae felis pretium, pulvinar elit eu, euismod sapien.
		 *
		 */
		'findPersons'(
			parameters?: Parameters<Paths.FindPersons.QueryParameters> | null,
			data?: any,
			config?: AxiosRequestConfig,
		): OperationResponse<Paths.FindPersons.Responses.$200>;
		/**
		 * addPerson - Creates a new person in the store. Duplicates are allowed
		 */
		'addPerson'(
			parameters?: Parameters<UnknownParamsObject> | null,
			data?: Paths.AddPerson.RequestBody,
			config?: AxiosRequestConfig,
		): OperationResponse<Paths.AddPerson.Responses.$200>;
		/**
		 * findPersonById - Returns a user based on a single ID, if the user does not have access to the person
		 */
		'findPersonById'(
			parameters?: Parameters<Paths.FindPersonById.PathParameters> | null,
			data?: any,
			config?: AxiosRequestConfig,
		): OperationResponse<Paths.FindPersonById.Responses.$200>;
		/**
		 * deletePerson - deletes a single person based on the ID supplied
		 */
		'deletePerson'(
			parameters?: Parameters<Paths.DeletePerson.PathParameters> | null,
			data?: any,
			config?: AxiosRequestConfig,
		): OperationResponse<Paths.DeletePerson.Responses.$204>;
	}

	export interface PathsDictionary {
		['/persons']: {
			/**
			 * findPersons - Returns all persons from the system that the user has access to
			 * Nam sed condimentum est. Maecenas tempor sagittis sapien, nec rhoncus sem sagittis sit amet. Aenean at gravida augue, ac iaculis sem. Curabitur odio lorem, ornare eget elementum nec, cursus id lectus. Duis mi turpis, pulvinar ac eros ac, tincidunt varius justo. In hac habitasse platea dictumst. Integer at adipiscing ante, a sagittis ligula. Aenean pharetra tempor ante molestie imperdiet. Vivamus id aliquam diam. Cras quis velit non tortor eleifend sagittis. Praesent at enim pharetra urna volutpat venenatis eget eget mauris. In eleifend fermentum facilisis. Praesent enim enim, gravida ac sodales sed, placerat id erat. Suspendisse lacus dolor, consectetur non augue vel, vehicula interdum libero. Morbi euismod sagittis libero sed lacinia.
			 *
			 * Sed tempus felis lobortis leo pulvinar rutrum. Nam mattis velit nisl, eu condimentum ligula luctus nec. Phasellus semper velit eget aliquet faucibus. In a mattis elit. Phasellus vel urna viverra, condimentum lorem id, rhoncus nibh. Ut pellentesque posuere elementum. Sed a varius odio. Morbi rhoncus ligula libero, vel eleifend nunc tristique vitae. Fusce et sem dui. Aenean nec scelerisque tortor. Fusce malesuada accumsan magna vel tempus. Quisque mollis felis eu dolor tristique, sit amet auctor felis gravida. Sed libero lorem, molestie sed nisl in, accumsan tempor nisi. Fusce sollicitudin massa ut lacinia mattis. Sed vel eleifend lorem. Pellentesque vitae felis pretium, pulvinar elit eu, euismod sapien.
			 *
			 */
			'get'(
				parameters?: Parameters<Paths.FindPersons.QueryParameters> | null,
				data?: any,
				config?: AxiosRequestConfig,
			): OperationResponse<Paths.FindPersons.Responses.$200>;
			/**
			 * addPerson - Creates a new person in the store. Duplicates are allowed
			 */
			'post'(
				parameters?: Parameters<UnknownParamsObject> | null,
				data?: Paths.AddPerson.RequestBody,
				config?: AxiosRequestConfig,
			): OperationResponse<Paths.AddPerson.Responses.$200>;
		};
		['/persons/{id}']: {
			/**
			 * findPersonById - Returns a user based on a single ID, if the user does not have access to the person
			 */
			'get'(
				parameters?: Parameters<Paths.FindPersonById.PathParameters> | null,
				data?: any,
				config?: AxiosRequestConfig,
			): OperationResponse<Paths.FindPersonById.Responses.$200>;
			/**
			 * deletePerson - deletes a single person based on the ID supplied
			 */
			'delete'(
				parameters?: Parameters<Paths.DeletePerson.PathParameters> | null,
				data?: any,
				config?: AxiosRequestConfig,
			): OperationResponse<Paths.DeletePerson.Responses.$204>;
		};
	}

	export type Client = OpenAPIClient<OperationMethods, PathsDictionary>;
	declare global {
		namespace AstroOpenAPI {
			export { Client };
		}
	}
}
