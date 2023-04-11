const {createApp} = Vue;
createApp
({
    data(){
        return{
            mail : '',
            mailNum : 0
        }
    },
    methods: {
        getMail() {
           
        },
        createMails(){
            if(this.mailNum < 10)
            {
                for(let i = 0; i < 10 ; i++)
                {
                    axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`).then((mail) => {
                        let newMail = document.createElement("li");
                        let mailContent = document.createElement("p");
                        mailContent.innerText = mail.data.response;
                        newMail.appendChild(mailContent);
                        let list = document.getElementById("mail-list");
                        list.appendChild(newMail);
                        this.mailNum++;           
                    })
                }
            }
            else
            {
                while (document.getElementById("mail-list").firstChild) {
                    document.getElementById("mail-list").removeChild(document.getElementById("mail-list").firstChild);
                  }
                  this.mailNum = 0;
            }
        }
    },
    mounted(){

    }
}).mount("#app");