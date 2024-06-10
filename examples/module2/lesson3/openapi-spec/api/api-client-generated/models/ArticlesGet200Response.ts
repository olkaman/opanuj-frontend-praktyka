/* tslint:disable */
/* eslint-disable */
/**
 * Amazing API
 * API for retrieving various resources such as authors and articles
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { Article } from './Article';
import {
    ArticleFromJSON,
    ArticleFromJSONTyped,
    ArticleToJSON,
} from './Article';

/**
 * 
 * @export
 * @interface ArticlesGet200Response
 */
export interface ArticlesGet200Response {
    /**
     * 
     * @type {Array<Article>}
     * @memberof ArticlesGet200Response
     */
    articles?: Array<Article>;
}

/**
 * Check if a given object implements the ArticlesGet200Response interface.
 */
export function instanceOfArticlesGet200Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ArticlesGet200ResponseFromJSON(json: any): ArticlesGet200Response {
    return ArticlesGet200ResponseFromJSONTyped(json, false);
}

export function ArticlesGet200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ArticlesGet200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'articles': !exists(json, 'articles') ? undefined : ((json['articles'] as Array<any>).map(ArticleFromJSON)),
    };
}

export function ArticlesGet200ResponseToJSON(value?: ArticlesGet200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'articles': value.articles === undefined ? undefined : ((value.articles as Array<any>).map(ArticleToJSON)),
    };
}

