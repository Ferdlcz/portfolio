<template>

    <v-col cols="12" sm="12" class="px-16" id="contact">
            <v-row>
              <v-col cols="12" sm="4">
                <div class="child">
                  <h1>Contactame</h1>
                  <v-btn
                    icon="fas fa-location-dot"
                    class="mt-10"
                    variant="outlined"
                  ></v-btn
                  ><br />
                  <span text-caption>Asientos Aguascalientes. MX</span> <br />
                  <v-btn
                    icon="fas fa-phone-alt"
                    class="mt-10"
                    variant="outlined"
                  ></v-btn
                  ><br />
                  <span text-caption>+52 4781023128</span> <br />
                  <v-btn
                    icon="fas fa-envelope"
                    class="mt-10"
                    variant="outlined"
                  ></v-btn
                  ><br />
                  <span text-caption>ferdlcskate@gmail.com</span> <br />
                </div>
              </v-col>
    
              <v-col cols="12" sm="8">
                <h1 class="mt-8">Enviar mensaje</h1>
                <v-divider></v-divider>
    
                <v-row class="mt-10">
                  <v-col cols="12" sm="6">
                    <v-text-field
                      label="Nombre"
                      persistent-hint
                      variant="outlined"
                      v-model="name"
                    ></v-text-field>
                    <v-text-field
                      label="Correo"
                      persistent-hint
                      variant="outlined"
                      v-model="email"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-textarea
                  label="Mensaje"
                  persistent-hint
                  variant="outlined"
                  v-model="message"
                ></v-textarea>
                <v-btn color="#FBDF7E" class="mt-2" @click="sendEmail">Enviar</v-btn>
              </v-col>
            </v-row>
          </v-col>
        
    
     </template>
    
     <script>

     import axios from 'axios';


     export default {
   
        data() {
    return {
      name: '',
      email: '',
      message: '',
    };
  },
  methods: {
    sendEmail() {
      const data = {
        name: this.name,
        email: this.email,
        message: this.message,
      };

      axios.post('/send-email', data)
        .then(response => {
          alert(response.data)
        })
        .catch(error => {
          alert(error)
        });
    },
  },
}
    
    </script>
    
    <style>
    
    
    </style> 