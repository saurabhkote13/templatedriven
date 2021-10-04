import { Component } from "@angular/core"
import { CrudService } from './crud.service';
@Component({
    selector: 'crud-comp',
    templateUrl: 'crud.component.html',
    providers: [CrudService]
})
export class CrudComponent {
    crud: any;
    crud2: any;
    crud3: any;
    crud4: any;
    constructor(private cs: CrudService) {

    }
    public GetHttpData2() {
        return this.cs.GetHttpData().subscribe(
            req => { this.crud = req },
            err => { this.crud = err }
        )
    }
    public PostHttpData2(data: any) {
        return this.cs.PostHttpData(data).subscribe(
            req => { this.crud2 = req },
            err => { this.crud2 = err }
        )
    }
    public PutHttpData2(data: any) {
        return this.cs.PutHttpData(data).subscribe(
            req => { this.crud3 = req },
            err => { this.crud3 = err }
        )
    }
    public DeleteHttpData2() {
        return this.cs.DeleteHttpData().subscribe(
            req => { this.crud4 = req },
            err => { this.crud4 = err }
        )
    }
}