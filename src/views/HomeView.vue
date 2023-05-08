<template>
  <v-app id="home">
    <Navbar />

    <v-container fluid>
      <div class="head">
        <v-row>
          <v-col cols="5">
            <div style="position: relative" class="mt-16">
              <h1 class="text-white">Hola!!</h1>
              <h1 class="text-white">Soy Fernando De La Cruz</h1>
              <span class="text-grey">Desarrollador de software</span> <br />
              <v-btn
                title
                dark
                class="text-yellow mt-8"
                variant="outlined"
                @click="scroll('contact')"
                >Cotactame</v-btn
              >
            </div>
          </v-col>
          <v-col cols="2">
            <div
              style="
                position: absolute;
                z-index: 9999;
                bottom: 0;
                margin-left: auto;
                margin-right: auto;
                left: 0;
                right: 0;
                text-align: center;
              "
            >
              <v-icon>fas fa-angle-double-down</v-icon>
            </div>
          </v-col>
          <v-col cols="5">
            <div style="position: relative; z-index: 9999" class="mt-16">
              <v-img src="user(temporal).png" contain max-height="300"></v-img>
            </div>
          </v-col>
        </v-row>
      </div>

      <v-col cols="12" class="mt-16" id="about">
        <div>
          <v-row>
            <v-col cols="12" sm="6">
              <div class="egg">
                <v-img src="about.png" max-heigt="300px"></v-img>
              </div>
            </v-col>

            <v-col cols="12" sm="6">
              <h5 class="mt-16">¿Quien soy?</h5>
              <div style="width: 120px">
                <v-slider v-model="slider2" color="yellow"> </v-slider>
              </div>
              <h4 class="mt-n4">Soy desarrollador de software</h4>
              <p class="text-grey">
                Tengo conocimiento en diferentes lenguajes de programacion y
                frameworks, lo que me permite a desarrollar proyectos de manera
                efectiva y eficiente, satisfaciendo asi las necesidades de los
                clientes
              </p>
              <br />
              <p class="text-grey">
                Mi enfoque es siempre centrarme en la calidad del código,
                manteniendo altos estándares de seguridad y rendimiento. Soy un
                desarrollador comprometido con el éxito del proyecto y siempre
                estoy dispuesto a aprender nuevas tecnologías y herramientas
                para mantenerme actualizado en un mercado en constante
                evolución.
              </p>
              <v-btn
                title
                dark
                color="yellow"
                class="mt-4"
                @click="descargarCurriculum"
                >Descargar curriculum</v-btn
              >
            </v-col>
          </v-row>
        </div>
      </v-col>

      <div class="text-center mt-4">
        <h2>Mis habilidades</h2>
        <div style="width: 120px; margin: 0 auto">
          <v-slider v-model="slider2" color="yellow"></v-slider>
        </div>
      </div>
      <v-col cols="12" class="padd" id="skills">
        <div class="first">
          <v-row>
            <v-col cols="12">
              <div class="child">
                <v-btn
                  icon="fa-brands fa-html5"
                  color="#000"
                  class="text-white"
                ></v-btn>
                <h3 class="ml-3 mt-4">HTML</h3>
              </div>
              <div class="child">
                <v-btn
                  icon="fa-brands fa-css3"
                  color="#000"
                  class="text-white"
                ></v-btn>
                <h3 class="ml-3 mt-4">CSS</h3>
              </div>
              <div class="child">
                <v-btn
                  icon="fa-brands fa-php"
                  color="#000"
                  class="text-white"
                ></v-btn>
                <h3 class="ml-3 mt-4">PHP</h3>
              </div>
              <div class="child">
                <v-btn
                  icon="fa-brands fa-square-js"
                  color="#000"
                  class="text-white"
                ></v-btn>
                <h3 class="ml-3 mt-4">JAVASCRIPT</h3>
              </div>
              <div class="child">
                <v-btn
                  icon="fa-brands fa-php"
                  color="#000"
                  class="text-white"
                ></v-btn>
                <h3 class="ml-3 mt-4">PHP</h3>
              </div>
              <div class="child">
                <v-btn
                  icon="fas fa-database"
                  color="#000"
                  class="text-white"
                ></v-btn>
                <h3 class="ml-3 mt-4">SQL</h3>
              </div>
              <div class="child">
                <v-btn
                  icon="fas fa-database"
                  color="#000"
                  class="text-white"
                ></v-btn>
                <h3 class="ml-3 mt-4">MONGODB</h3>
              </div>
            </v-col>
          </v-row>
          <v-divider></v-divider>
        </div>
      </v-col>
      <v-col cols="12" sm="12" id="projects">
        <div class="text-center mt-4">
          <h2>Proyectos</h2>
          <div style="width: 120px; margin: 0 auto">
            <v-slider v-model="slider2" color="yellow"></v-slider>
          </div>
        </div>
      </v-col>

      <v-col cols="12">
        <v-row class="fill-height" align="center" justify="center">
          <template v-for="(item, i) in items" :key="i">
            <v-col cols="12" md="4">
              <v-hover v-slot="{ isHovering, props }">
                <v-card
                  :elevation="isHovering ? 12 : 2"
                  :class="{ 'on-hover': isHovering }"
                  v-bind="props"
                >
                  <h2 class="text-center">{{ item.title }}</h2>
                  <v-img :src="item.img" height="225px" cover></v-img>
                  <p class="text-center">{{ item.descripcion }}</p>
                </v-card>
              </v-hover>
            </v-col>
          </template>
        </v-row>
      </v-col>

      <ContactView />

    </v-container>

    <FooterView />
  </v-app>
</template>

<script>
import { defineComponent } from "vue";

// Components
import Navbar from "@/components/NavBar.vue";
import FooterView from "@/components/FooterView.vue";
import ContactView from "@/components/ContactView.vue";

export default defineComponent({

  methods: {
    scroll(refName) {
      const element = document.getElementById(refName);
      element.scrollIntoView({ behavior: "smooth" });
    },

    descargarCurriculum() {
      const url =
        "https://drive.google.com/file/d/1xSlrtrTxgTqYAjZyTF9pG1neCMmpEwd2/view?usp=share_link";
      window.open(url, "blank");
    },

  },



  name: "HomeView",
  setup() {
    return {
      slider2: 50,
      items: [
        {
          title: "Rick & Morty Wiki",
          img: "RM.png",
          descripcion:
            "Consumiendo la api de rick & morty para lograr mostrar todos los personajes con sus distintas caracteristicas.",
        },
        {
          title: "Ecoomerce",
          img: "Urban.png",
          descripcion:
            "Proyecto universitario, cuenta con un panel administrativo y un aparado para los clientes.",
        },
        {
          title: "Administracion de encuestas",
          img: "encuestas.png",
          descripcion:
            "Proyecto universitaro, para la administracion de encuestas al docente.",
        },
      ],
    };
  },

  components: {
    Navbar,
    FooterView,
    ContactView,
  },
});
</script>

<style>
.v-container {
  padding: 16px 0;
}

.head {
  position: relative;
  text-align: center;
  padding: 12px;
  margin-bottom: 6px;
  height: 400px;
  width: 100%;
  color: #fff;
}

.head:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 50%;
  background: #000;
  transform: skew(0deg, 6deg);
}

.head:after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 50%;
  background: #000;
  transform: skew(0deg, -6deg);
}

.egg {
  display: block;
  margin-left: 100px;
  margin-top: 50px;
  width: 356px;
  height: 300px;
  background: #f8df7e;
  border-radius: 50% / 60% 40%;
}

.first {
  width: 100%;
  height: 200px;
  text-align: center;
  padding: 2rem;
}

.child {
  display: inline-block;
  padding: 2rem 1rem;
  vertical-align: middle;
  text-align: center;
  margin-right: 8px;
}

.imgHover {
  padding: 0 200px;
}

.pre {
  width: 100%;
  height: 380px;
  text-align: center;
  padding: 0 200px;
  background-color: #f5f5f5;
}

.hire {
  width: 100%;
  height: 200px;
  padding: 0 200px;
  background-color: #e9e9e9;
  margin-top: -24px;
}
</style>
