import * as invoice_detail_component from "./invoice-detail.component"

// @ponicode
describe("ngOnInit", () => {
    let inst: any

    beforeEach(() => {
        inst = new invoice_detail_component.InvoiceDetailComponent(undefined)
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.ngOnInit()
        }
    
        expect(callFunction).not.toThrow()
    })
})
