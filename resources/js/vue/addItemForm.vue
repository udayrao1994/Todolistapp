<template >



  


    <div class="addItem">
        <input type="text" v-model="item.name" />
         <b-button  text-variant ="white" variant="dark" @click="addItem()" 
         :class="[ item.name ? 'active' : 'inactive']" >Button</b-button>
       
       
</div>

</template>




<script>

import axios from "axios";

export default {
    data: function () {
        return {
            item: {
                name: "",
            }
        }
    },
    methods: {
        addItem() {
            if( this.item.name == '') {
                return;
            }

            axios.post('http://127.0.0.1:8000/api/items/store', {
                item: this.item
            })
            .then ( response => {
                if( response.status == 201 ) {
                    this.item.name = "";
                    this.$emit('reloadlist');
                }
            })
            .catch( error => {
                console.log("error : ",error)
            })
        }
    }
}
</script>

<style scoped>
.addItem {
    display: flex;
    justify-content: center;
    align-items: center;
}
input {
    background: #c9c2c2;
    border: 0px;
    outline: none;
    padding: 5px;
    margin-right: 10px;
    width: 100%;
}
.plus {
    font-size: 20px;

}
.active {
    color: #ce5200;
}
.inactive {
    color: #999999;
}
</style>