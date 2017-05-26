import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

/**
 * HeilbaumProgressBarComponent
 */
@Component({
    selector: 'heilbaum-progress-bar',
    styles: [`
        .progress {
            width: 100%;
            margin: 10px 0;
            padding: 3px;
            text-align: center;
            color: #ffffff;
            border-radius: 20px;
            z-index: 100;
        }
        .progress.progress-bg-grey {
            background-color: #f4f4f4;
        }
        .progress.progress-bg-transparent {
            background-color: transparent;
        }
        .progress.progress-small {
            margin: 0;
            padding: 0;
            border-radius: 0;
        }
        .progress.progress-small.bottom {
            margin: 0;
            position: absolute;
            right: 0;
            bottom: 0;
            left: 0;
        }
        .progress.progress-small.top {
            margin: 0;
            position: absolute;
            top: 0;
            right: 0;
            left: 0;
        }
        .progress-bar {
            min-width: 15%;
            white-space: nowrap;
            overflow: hidden;
            padding: 5px;
            border-radius: 20px;
            transition: width 200ms linear;
        }
        .progress-bar-danger {
            background-color: #f53d3d;
        }
        .progress-bar-info {
            background-color: #387ef5;
        }
        .progress-bar-success {
            background-color: #32db64;
        }
        .progress-bar-warning {
            background-color: #f0ad4e;
        }
        .progress.progress-small > .progress-bar {
            min-width: 0;
            padding: 2px 0;
            border-radius: 0;
        }
        .progress.progress-small .progress-label {
            display: none;
        }
    `],
    template: `
        <div [class]="'progress progress-' + size + ' progress-bg-' + bgColor">
            <div role="progressbar"
                 [class]="'progress-bar progress-bar-' + color"
                 [style.transition-duration]="transitionDuration + 'ms'"
                 [style.width]="progress + '%'"
                 [style.min-width]="hideLabel ? 0 : null">
                <span class="progress-label">{{ hideLabel ? '&nbsp;' : (label ? label : progress + '%') }}</span>
            </div>
        </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class HeilbaumProgressBarComponent {

    @Input('backgroundColor') bgColor: string = HeilbaumProgressBarBgColor.grey;
    @Input() color: string = HeilbaumProgressBarColor.info;
    @Input() hideLabel: boolean = false;
    @Input() label: string = '';
    @Input() progress: number = 0;
    @Input() size: string = HeilbaumProgressBarSize.large;
    @Input() transitionDuration: number = 200;

}

export const HeilbaumProgressBarBgColor = {
    grey: 'grey',
    transparent: 'transparent'
};

export const HeilbaumProgressBarColor = {
    danger: 'danger',
    info: 'info',
    success: 'success',
    warning: 'warning'
};

export const HeilbaumProgressBarSize = {
    large: 'large',
    small: 'small',
    smallBottom: 'small bottom',
    smallTop: 'small top'
};
