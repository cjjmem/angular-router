import { Directive, ElementRef, Input } from '@angular/core';
@Directive({
    selector: '[myHighlight]',
    host: {
        '(mouseenter)': 'onMouseEnter()',
        '(mouseleave)': 'onMouseLeave()'
    }
})


export class HighlightDirective {
    private _defaultColor = 'red';
    private el: HTMLElement;
    constructor(el: ElementRef) { this.el = el.nativeElement; }
    @Input() set defaultColor(colorName:string){
        this._defaultColor = colorName || this._defaultColor;
    }
    @Input('myHighlight') highlightColor: string;
    onMouseEnter() { this.highlight(this.highlightColor || this._defaultColor); }
    onMouseLeave() { this.highlight(null); }
    private highlight(color:string) {
        this.el.style.backgroundColor = color;
    }
}

export class HightlightDirective{
    private _defaultColor = 'red';
    private _defaultFontSize =  '12';

    private el :HTMLElement;
    constructor(el: ElementRef){ this.el = el.nativeElement; }
    @Input() set defaultColor(colorName:string){
        this._defaultColor = colorName || this._defaultColor;
    }
    @Input('myHighlight') highlightColor: string;
    onMouseEnter() { this.highlight(this.highlightColor || this._defaultColor);}
    private highlight(color : string)
    {
        this.el.style.backgroundColor = color;
    }

    @Input() set defaultFontSize(Sizename : string){
        this._defaultFontSize = Sizename || this._defaultFontSize;
    }

    @Input('myfontzie') myfontsize : string;
    onMouseEnter(){ this.fontsize(this.myfontsize || this._defaultColor);}

    private fontsize (size : string){
        this.el.style.fontSize = size;
    }



}