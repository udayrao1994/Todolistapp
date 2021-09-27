    <template>
  
    <b-row>
        <b-col cols="12">
        <div class="item"   >
            <input 
                type="checkbox"
                @change="updateCheck()"
                v-model="item.completed"
            />
        
        <div  class="row" v-if="isEditing">
            <input type="text" v-model="item.name" />
        </div>
        
        <div v-else>
            <span :class="[item.completed ? 'completed' : '', 'itemText']"> {{ item.name }} </span>
        </div>
        
            <div v-if="isEditing">
            <button @click="update()" class="faEdit" >
                <font-awesome-icon icon="plus-square" />
            </button>
        </div>
        <div v-else>
        <b-button variant="success" @click="edit()" >
                Edit
            </b-button>
        </div>
        <br>
        <b-button variant="danger" @click="removeItem()" >
                Delete
            </b-button>
        </div>
        </b-col>
            </b-row>
  
    </template>

    <script>

    export default {
        props: ['item'],
        data(){
            return {isEditing:false}
        },
        methods: {
            updateCheck () {
                axios.put('http://127.0.0.1:8000/api/items/' + this.item.id, {
                    item: this.item
                })
                .then( response=> {
                    if ( response.status == 200 ) {
                        this.$emit('itemChange');
                    }
                })
                .catch( error => {
                    console.log('error : ', error);
                })
            },
            removeItem () {
                axios.delete('http://127.0.0.1:8000/api/items/' + this.item.id )
                .then( response=> {
                    if ( response.status == 200 ) {
                        this.$emit('itemChange');
                    }
                })
                .catch( error => {
                    console.log('error : ', error);
                })
            },
            edit () {
                this.isEditing=true;
            },
            update(){
            
                axios.put('http://127.0.0.1:8000/api/items/edit/' + this.item.id, {
                    item: this.item
                })
                .then( response=> {
                    if ( response.status == 200 ) {
                        this.isEditing=false;
                        this.$emit('itemChange');

                    }
                })
                .catch( error => {
                    console.log('error : ', error);
                })
            }
        }
    }
    </script>


