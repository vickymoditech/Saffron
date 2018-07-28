<template>

        <tbody>
                <template v-for="user in users">
                    <single-row :user="user" @editUser="editUser"></single-row>
                </template>

                <b-modal v-model="show"
                         title="Modal Variants"
                         :header-bg-variant="headerBgVariant"
                         :header-text-variant="headerTextVariant"
                         :body-bg-variant="bodyBgVariant"
                         :body-text-variant="bodyTextVariant"
                         :footer-bg-variant="footerBgVariant"
                         :footer-text-variant="footerTextVariant">
                    <b-container>

                        <b-row class="mb-1">
                            <b-col cols="2">Name</b-col>
                            <b-col> <input type="text" v-model="user.name">  </b-col>
                        </b-row>

                        <b-row class="mb-1">
                            <b-col cols="2">Age</b-col>
                            <b-col> <input type="text" v-model="user.age">  </b-col>
                        </b-row>

                        <b-row class="mb-1">
                            <b-col cols="2">Mobile</b-col>
                            <b-col> <input type="text" v-model="user.mobile">  </b-col>
                        </b-row>

                        <b-row class="mb-1">
                            <b-col cols="2">Image</b-col>
                            <b-col> <input type="text" v-model="user.image">  </b-col>
                        </b-row>




                    </b-container>
                    <div slot="modal-footer" class="w-100">
                        <p class="float-left">Modal Footer Content</p>
                        <b-btn size="sm" class="float-right" variant="primary" @click="show=false">
                            Close
                        </b-btn>
                    </div>
                </b-modal>
        </tbody>

</template>



<script>

    import SingleRow from './SingleRow';

    export default {
        name:"SingleUser",
        data(){
            return {
                show: false,
                headerBgVariant: 'dark',
                headerTextVariant: 'light',
                bodyBgVariant: 'light',
                bodyTextVariant: 'dark',
                footerBgVariant: 'warning',
                footerTextVariant: 'dark',
                user:""
            }
        },
        props:['users'],
        components:{
            SingleRow
        },
        methods:{
            editUser:function (user) {
               this.user = user;
               this.show = !this.show;
            }
        }
    }
</script>