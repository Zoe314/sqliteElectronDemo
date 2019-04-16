import { observable, action,computed } from 'mobx'

class Store {
    @observable name= "zoe"
    @action doSomething(val){
        this.name = val
    }
    @computed get num(){
        return this.name +'abc'
    }
}

export default new Store()