// tslint:disable
/**
 * Lockdown app
 * This is the api for the lockdown app
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: nonem@swagger.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as globalImportUrl from 'url';
import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface Address
 */
export interface Address {
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    street: string;
    /**
     * 
     * @type {number}
     * @memberof Address
     */
    houseNo: number;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    postalCode: string;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    city: string;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    province?: string;
    /**
     * 
     * @type {string}
     * @memberof Address
     */
    country?: string;
}
/**
 * 
 * @export
 * @interface FamilyTicketPayload
 */
export interface FamilyTicketPayload extends TicketPayload {
}
/**
 * 
 * @export
 * @interface FoodTicketPayload
 */
export interface FoodTicketPayload extends TicketPayload {
}
/**
 * 
 * @export
 * @interface HealthTicketPayload
 */
export interface HealthTicketPayload extends TicketPayload {
}
/**
 * 
 * @export
 * @interface HelpTicketPayload
 */
export interface HelpTicketPayload extends TicketPayload {
}
/**
 * 
 * @export
 * @interface ModelError
 */
export interface ModelError {
    /**
     * 
     * @type {number}
     * @memberof ModelError
     */
    code: number;
    /**
     * 
     * @type {string}
     * @memberof ModelError
     */
    message: string;
}
/**
 * 
 * @export
 * @interface RecreationTicketPayload
 */
export interface RecreationTicketPayload extends TicketPayload {
}
/**
 * 
 * @export
 * @interface TicketPayload
 */
export interface TicketPayload {
    /**
     * 
     * @type {string}
     * @memberof TicketPayload
     */
    hashIdentityNumber: string;
    /**
     * 
     * @type {number}
     * @memberof TicketPayload
     */
    userPin: number;
    /**
     * 
     * @type {Address}
     * @memberof TicketPayload
     */
    startPosition: Address;
    /**
     * 
     * @type {Address}
     * @memberof TicketPayload
     */
    finishPosition: Address;
    /**
     * 
     * @type {string}
     * @memberof TicketPayload
     */
    reason: string;
    /**
     * 
     * @type {string}
     * @memberof TicketPayload
     */
    signature: string;
    /**
     * 
     * @type {Date}
     * @memberof TicketPayload
     */
    leaveTime: Date;
    /**
     * 
     * @type {Date}
     * @memberof TicketPayload
     */
    arrivalTime?: Date;
}
/**
 * @type TicketRequest
 * @export
 */
export type TicketRequest = FamilyTicketPayload | FoodTicketPayload | HealthTicketPayload | HelpTicketPayload | RecreationTicketPayload | WorkTicketPayload;

/**
 * 
 * @export
 * @interface WorkTicketPayload
 */
export interface WorkTicketPayload extends TicketPayload {
    /**
     * 
     * @type {string}
     * @memberof WorkTicketPayload
     */
    employerCode: string;
}

/**
 * DefaultApi - axios parameter creator
 * @export
 */
export const DefaultApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create a new Ticket Request
         * @param {TicketPayload} TicketPayload Create a new TIcketRequest
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addTicketRequest(TicketPayload: TicketPayload, options: any = {}): RequestArgs {
            // verify required parameter 'TicketPayload' is not null or undefined
            if (TicketPayload === null || TicketPayload === undefined) {
                throw new RequiredError('TicketPayload','Required parameter TicketPayload was null or undefined when calling addTicketRequest.');
            }
            const localVarPath = `/ticket`;
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};
            const needsSerialization = (typeof TicketPayload !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(TicketPayload !== undefined ? TicketPayload : {}) : (TicketPayload || "");

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * deletes a TicketRequest
         * @param {number} id ID to delete
         * @param {number} pin pin to of the ID to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deletePet(id: number, pin: number, options: any = {}): RequestArgs {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling deletePet.');
            }
            // verify required parameter 'pin' is not null or undefined
            if (pin === null || pin === undefined) {
                throw new RequiredError('pin','Required parameter pin was null or undefined when calling deletePet.');
            }
            const localVarPath = `/ticket/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)))
                .replace(`{${"pin"}}`, encodeURIComponent(String(pin)));
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns all Ticket requests identified by the pin
         * @param {number} pin pin of user
         * @param {string} hash hashIdentityNumber of the user
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findTicketRequestsByPin(pin: number, hash: string, options: any = {}): RequestArgs {
            // verify required parameter 'pin' is not null or undefined
            if (pin === null || pin === undefined) {
                throw new RequiredError('pin','Required parameter pin was null or undefined when calling findTicketRequestsByPin.');
            }
            // verify required parameter 'hash' is not null or undefined
            if (hash === null || hash === undefined) {
                throw new RequiredError('hash','Required parameter hash was null or undefined when calling findTicketRequestsByPin.');
            }
            const localVarPath = `/ticket/findByPinAndHash`
                .replace(`{${"pin"}}`, encodeURIComponent(String(pin)))
                .replace(`{${"hash"}}`, encodeURIComponent(String(hash)));
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a user based on a single ID
         * @param {number} id ID of the ticket request
         * @param {number} pin Pin for the ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTicketRequest(id: number, pin: number, options: any = {}): RequestArgs {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling getTicketRequest.');
            }
            // verify required parameter 'pin' is not null or undefined
            if (pin === null || pin === undefined) {
                throw new RequiredError('pin','Required parameter pin was null or undefined when calling getTicketRequest.');
            }
            const localVarPath = `/ticket/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (pin !== undefined) {
                localVarQueryParameter['pin'] = pin;
            }


    
            localVarUrlObj.query = {...localVarUrlObj.query, ...localVarQueryParameter, ...options.query};
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...options.headers};

            return {
                url: globalImportUrl.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DefaultApi - functional programming interface
 * @export
 */
export const DefaultApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Create a new Ticket Request
         * @param {TicketPayload} TicketPayload Create a new TIcketRequest
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addTicketRequest(TicketPayload: TicketPayload, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<TicketRequest> {
            const localVarAxiosArgs = DefaultApiAxiosParamCreator(configuration).addTicketRequest(TicketPayload, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * deletes a TicketRequest
         * @param {number} id ID to delete
         * @param {number} pin pin to of the ID to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deletePet(id: number, pin: number, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<void> {
            const localVarAxiosArgs = DefaultApiAxiosParamCreator(configuration).deletePet(id, pin, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Returns all Ticket requests identified by the pin
         * @param {number} pin pin of user
         * @param {string} hash hashIdentityNumber of the user
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findTicketRequestsByPin(pin: number, hash: string, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<TicketRequest>> {
            const localVarAxiosArgs = DefaultApiAxiosParamCreator(configuration).findTicketRequestsByPin(pin, hash, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Returns a user based on a single ID
         * @param {number} id ID of the ticket request
         * @param {number} pin Pin for the ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTicketRequest(id: number, pin: number, options?: any): (axios?: AxiosInstance, basePath?: string) => AxiosPromise<TicketRequest> {
            const localVarAxiosArgs = DefaultApiAxiosParamCreator(configuration).getTicketRequest(id, pin, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * DefaultApi - factory interface
 * @export
 */
export const DefaultApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Create a new Ticket Request
         * @param {TicketPayload} TicketPayload Create a new TIcketRequest
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addTicketRequest(TicketPayload: TicketPayload, options?: any): AxiosPromise<TicketRequest> {
            return DefaultApiFp(configuration).addTicketRequest(TicketPayload, options)(axios, basePath);
        },
        /**
         * deletes a TicketRequest
         * @param {number} id ID to delete
         * @param {number} pin pin to of the ID to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deletePet(id: number, pin: number, options?: any): AxiosPromise<void> {
            return DefaultApiFp(configuration).deletePet(id, pin, options)(axios, basePath);
        },
        /**
         * Returns all Ticket requests identified by the pin
         * @param {number} pin pin of user
         * @param {string} hash hashIdentityNumber of the user
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findTicketRequestsByPin(pin: number, hash: string, options?: any): AxiosPromise<Array<TicketRequest>> {
            return DefaultApiFp(configuration).findTicketRequestsByPin(pin, hash, options)(axios, basePath);
        },
        /**
         * Returns a user based on a single ID
         * @param {number} id ID of the ticket request
         * @param {number} pin Pin for the ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getTicketRequest(id: number, pin: number, options?: any): AxiosPromise<TicketRequest> {
            return DefaultApiFp(configuration).getTicketRequest(id, pin, options)(axios, basePath);
        },
    };
};

/**
 * DefaultApi - interface
 * @export
 * @interface DefaultApi
 */
export interface DefaultApiInterface {
    /**
     * Create a new Ticket Request
     * @param {TicketPayload} TicketPayload Create a new TIcketRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    addTicketRequest(TicketPayload: TicketPayload, options?: any): AxiosPromise<TicketRequest>;

    /**
     * deletes a TicketRequest
     * @param {number} id ID to delete
     * @param {number} pin pin to of the ID to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    deletePet(id: number, pin: number, options?: any): AxiosPromise<void>;

    /**
     * Returns all Ticket requests identified by the pin
     * @param {number} pin pin of user
     * @param {string} hash hashIdentityNumber of the user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    findTicketRequestsByPin(pin: number, hash: string, options?: any): AxiosPromise<Array<TicketRequest>>;

    /**
     * Returns a user based on a single ID
     * @param {number} id ID of the ticket request
     * @param {number} pin Pin for the ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    getTicketRequest(id: number, pin: number, options?: any): AxiosPromise<TicketRequest>;

}

/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export class DefaultApi extends BaseAPI implements DefaultApiInterface {
    /**
     * Create a new Ticket Request
     * @param {TicketPayload} TicketPayload Create a new TIcketRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public addTicketRequest(TicketPayload: TicketPayload, options?: any) {
        return DefaultApiFp(this.configuration).addTicketRequest(TicketPayload, options)(this.axios, this.basePath);
    }

    /**
     * deletes a TicketRequest
     * @param {number} id ID to delete
     * @param {number} pin pin to of the ID to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public deletePet(id: number, pin: number, options?: any) {
        return DefaultApiFp(this.configuration).deletePet(id, pin, options)(this.axios, this.basePath);
    }

    /**
     * Returns all Ticket requests identified by the pin
     * @param {number} pin pin of user
     * @param {string} hash hashIdentityNumber of the user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public findTicketRequestsByPin(pin: number, hash: string, options?: any) {
        return DefaultApiFp(this.configuration).findTicketRequestsByPin(pin, hash, options)(this.axios, this.basePath);
    }

    /**
     * Returns a user based on a single ID
     * @param {number} id ID of the ticket request
     * @param {number} pin Pin for the ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public getTicketRequest(id: number, pin: number, options?: any) {
        return DefaultApiFp(this.configuration).getTicketRequest(id, pin, options)(this.axios, this.basePath);
    }

}

