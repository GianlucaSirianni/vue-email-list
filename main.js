var app = new Vue(
    {

    el: '#root',

    data: {

           mailArray: [],

        },

    mounted() {

        },

    beforeUpdate() {

        },

    methods: {

        
        emailGenerator(){
            
            for(i=0; i<10; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res) => {
                  let randomMail = res.data.response;
                  this.mailArray.push(randomMail);                 
                })
            }
        }

        }
    }
)


