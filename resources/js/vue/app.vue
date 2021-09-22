<template>
    <div class="todoListContainer">
        <div class="heading">
            <h2 id="title">Todo List</h2>
            <add-item-form v-on:reloadlist="getList()" />
        </div>
        <list-view 
            :items="items"
            v-on:reloadlist="getList()"
        />
        
    </div>
</template>

<script>
import axios from "axios";
import addItemForm from "./addItemForm.vue"
import listView from "./listView.vue"

export default {
    components: {
        addItemForm,
        listView,
    },
    data: function() {
        return {
            
            items: []
        }
    },
    created() {
        console.log('Component mounted.')
        this.getList();
    },
    methods: {
        getList () {
            axios.get('http://127.0.0.1:8000/api/items')
            .then( response => {
                console.log("response",response.data)
                this.items = response.data
            })
            .catch( error => {
                console.log("error : ",error)
            })
        },
    }
}
</script>

<style scoped>
.todoListContainer {
    width: 350px;
    margin: auto;
}
.heading {
    background: #e6e6e6;
    padding: 10px;
}
#title {
    text-align: center;
}
</style>