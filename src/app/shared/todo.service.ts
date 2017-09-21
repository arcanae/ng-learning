import { Injectable } from "@angular/core";


@Injectable()
export class TodoService {
    private liste:string[] = [
        'ga',
        'zo',
        'meu'
    ];

    getTodos():string[] {
        return this.liste;
    }

    add(todo:string) {
        this.liste.push(todo);
    }

    remove(index:number) {
        this.liste.splice(index,1);
    }
}