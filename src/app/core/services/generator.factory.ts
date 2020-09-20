import { InjectionToken } from '@angular/core';

import { GeneratorService } from './generator.service';

export const GENERATOR_TOKEN_NAME = 'random_symbol_generator';

export const GENERATOR_TOKEN = new InjectionToken<string>(GENERATOR_TOKEN_NAME);

export const GeneratorFactory = (count: number) =>
    (generatorService: GeneratorService) =>
        generatorService.generate(count);
