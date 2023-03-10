import {Component} from 'san'

import service from '../service'
import ColorPicker from '../ui/color-picker'

import './add.css'


export default class Add extends Component<{
    title: string;
    color: string;
}> {
    static template = `
    <div class="form">
        <input type="text" placeholder="分类" class="form-title" value="{= title =}">
        <ui-colorpicker value="{= color =}"></ui-colorpicker>
        <div class="form-op">
            <button type="button" class="form-ok" on-click="submit"><i class="fa fa-check-circle-o"></i></button>
            <button type="button" class="form-cancel" on-click="cancel"><i class="fa fa-times-circle-o"></i></button>
        </div>
    </div>
    `;

    static components = {
        'ui-colorpicker': ColorPicker
    };

    initData() {
        return {
            title: '',
            color: ''
        };
    }

    submit() {
        let title = this.data.get('title');
        if (!title) {
            return;
        }

        service.addCategory({
            title: title,
            color: this.data.get('color')
        });

        this.finish();
    }

    cancel() {
        this.finish();
    }

    finish() {
        let e: {returnValue?: boolean} = {};
        this.fire('finished', e);

        if (e.returnValue !== false) {
            history.go(-1);
        }
    }
}
