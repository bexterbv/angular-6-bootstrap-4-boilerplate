import * as _ from 'lodash';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from '../models/cities.contracts';

@Injectable()
export class CitiesService {
    private baseUrl: string;
    private repository: any = require('../assets/data/cities.json');

    constructor() {}

    getCities(page?: number, pageSize?: number): Observable<Array<City>> {
        let evaluatedPage = page == null ? 1 : page;
        let evaluatedPageSize = pageSize == null ? 50 : pageSize;
        if (evaluatedPage < 1) {
            evaluatedPage = 1;
        }
        if (evaluatedPageSize < 10 && evaluatedPageSize > 1000) {
            evaluatedPageSize = 50;
        }

        const skip = (evaluatedPage - 1) * evaluatedPageSize;
        const data = JSON.parse(this.repository) as Array<City>;
        const items = _.rest(data, skip).slice(0, evaluatedPageSize);
        const currentItems = items as Array<City>;
        return Observable.of(currentItems);
    }
}
