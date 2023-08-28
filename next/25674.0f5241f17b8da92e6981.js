(self.webpackChunk_taiga_ui_components=self.webpackChunk_taiga_ui_components||[]).push([[25674],{25674:e=>{e.exports="import {Component, ElementRef, HostListener, ViewChild} from '@angular/core';\nimport {changeDetection} from '@demo/emulate/change-detection';\nimport {encapsulation} from '@demo/emulate/encapsulation';\n\n@Component({\n    selector: 'tui-pin-example-5',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiPinExample5 {\n    @ViewChild('pointer', {read: ElementRef})\n    private readonly pointer!: ElementRef<HTMLElement>;\n\n    @HostListener('document:mousemove', ['$event'])\n    drawPosition(event: MouseEvent | TouchEvent): void {\n        const [clientX, clientY] = this.getCursorPosition(event);\n        const rect = this.pointer.nativeElement.getBoundingClientRect();\n        const x = Math.ceil(clientX - (rect.left + rect.width / 2));\n        const y = Math.ceil(clientY - (rect.top + rect.height / 2));\n        const degrees = Math.atan2(x, y) * (180 / Math.PI) * -1 + 180;\n\n        this.pointer.nativeElement.style.transform = `rotate(${degrees}deg)`;\n    }\n\n    private getCursorPosition(event: MouseEvent | TouchEvent): [number, number] {\n        let clientX = (event as MouseEvent)?.clientX;\n        let clientY = (event as MouseEvent)?.clientY;\n\n        if ((event as TouchEvent)?.targetTouches?.[0]) {\n            event.preventDefault();\n\n            const pointerEvent = (event as TouchEvent)?.targetTouches[0];\n\n            clientX = pointerEvent.pageX;\n            clientY = pointerEvent.pageY;\n        }\n\n        return [clientX, clientY];\n    }\n}\n"}}]);