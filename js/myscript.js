const {createApp} = Vue;
createApp
({
    data(){
        return{
            mails: []
        }
    },
    methods: {
        getMail() {
           
        },
        createMails(){
            const newMails = [];
            if(this.mails.length < 10)
            {
                for(let i = 0; i < 10 ; i++)
                {
                    axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`).then((mail) => {
                        this.mails.push(mail.data.response);     
                    })
                }
                
            }
            else
            {
                this.mails = [];
                for(let i = 0; i < 10 ; i++)
                {
                    axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`).then((mail) => {
                        this.mails.push(mail.data.response);     
                    })
                }
            }
        }
    },
    mounted(){
        this.createMails()
    }
}).mount("#app");