import { Injectable } from '@angular/core';
import { Microfrontend } from './microfrontend';

@Injectable({ providedIn: 'root' })
export class LookupService {
    lookup(): Promise<Microfrontend[]> {
        return Promise.resolve([
            {
                // For Loading
                type: 'module',
                remoteEntry: 'http://localhost:3000/remoteEntry.js',
                exposedModule: './Module',

                // For Routing
                displayName: 'Cars Management',
                routePath: 'cars-management',
                ngModuleName: 'CarsModule'
            },
            {
                // For
                type: 'module',
                remoteEntry: 'http://localhost:3001/remoteEntry.js',
                exposedModule: './Module',

                // For Routing
                displayName: 'Insert',
                routePath: 'carCreate',
                ngModuleName: 'CarCreateModule'
            }
        ] as Microfrontend[]);
    }
}
