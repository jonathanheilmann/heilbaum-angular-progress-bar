import { NgModule } from '@angular/core';
import {IonicModule} from 'ionic-angular';

import { HeilbaumProgressBarComponent } from './components/heilbaum-progress-bar.component';



@NgModule({
    declarations: [
        HeilbaumProgressBarComponent
    ],
    exports: [
        HeilbaumProgressBarComponent
    ],
    imports: [
        IonicModule
    ]
})
export class HeilbaumProgressBarModule {}