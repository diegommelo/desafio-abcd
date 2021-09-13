<template>
    <BaseLayout>
      <div class="container">
        <div class="new-kid">
          <div class="change-avatar">
            <div class="change-avatar__img">
              <img :src="defaultAvatar" class="default-avatar" />
            </div>
            <div class="change-avatar__button">
              <b-button b-button classes="is-secondary" @click="changeAvatar">Mudar avatar</b-button>
            </div>
          </div>
          <form @submit.prevent="onNewKid">
            <div class="form-group">
              <b-label for="name">Nome Completo</b-label>
              <b-input type="text"  name="name" v-model="form.name"></b-input>
              <b-label for="school">Escola</b-label>
              <b-input type="text"  name="school" v-model="form.school"></b-input>
            </div>
            <div class="new-kid-year">
              <div>
                <img :src="kidImage" class="kid" />
              </div>
            <div class="new-kid-year__school-year">
                <p>Ano Escolar</p>
                <div class="new-kid-school-year">
                  <b-radio name="year" v-model="form.year" option="0" label="Pré" id="year0" type="radio"></b-radio>
                  <b-radio name="year" v-model="form.year" option="1" label="1" id="year1" type="radio"></b-radio>
                  <b-radio name="year" v-model="form.year" option="2" label="2" id="year2" type="radio"></b-radio>
                  <b-radio name="year" v-model="form.year" option="3" label="3" id="year3" type="radio"></b-radio>
                </div>
                <div class="new-kid-school-year__pre">
                  <p><strong>Pré I:</strong> Aluno completou 4 anos antes do dia 31 de março de 2020</p>
                  <p><strong>Pré II:</strong> Aluno completou 5 anos antes do dia 31 de março de 2020</p>
                </div>
              </div>
            </div>
            <div class="new-kid-consent">
              <b-radio type="checkbox" name="consent" v-model="form.consent"></b-radio>
              <p>
                Eu autorizo o EduEdu a coletar e processar os dados do(s) meu(s) filho(s) conforme a <a href="#">política de privacidade.</a>
              </p>
            </div>
            <b-button type="submit" classes="is-primary">Adicionar aluno</b-button>
          </form>
        </div>
      </div>
    </BaseLayout>
</template>

<script>
import BaseLayout from '@/views/Layouts/BaseLayout.vue'

export default {
  name: 'NewKid',
  components: {
    BaseLayout
  },
  data () {
    return {
      form: {
        name: '',
        avatar: '',
        year: '',
        school: '',
        consent: false,
      },
    }
  },
  computed: {
    defaultAvatar () {
      return require(`@/assets/kids/sr-goiaba.png`);
    },
    kidImage () {
      return require(`@/assets/kid.png`);
    }
  }
}
</script>

<style lang="scss">
@import "@/scss/_variables.scss";

.new-kid {
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 4px 0 $white-box-shadow;
  margin-top: 20px;
  width: 30vw;
  margin: 30px auto;
  padding: 20px;
}
.new-kid-school-year, .new-kid-consent, .new-kid-year {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.new-kid-year {
  padding: 20px 20px 0 20px;
}
.new-kid-year__school-year {
  width: 100%;
  padding: 20px;
}
.new-kid-year__school-year p {
  font-size: 1.2rem;
  font-weight: bold;
  color: $primary;
  text-align: center;
}
.new-kid-school-year__pre {
  margin-top: 20px;
}
.new-kid-school-year__pre p {
  text-align: left;
  color: $text-color;
  opacity: 0.5;
  font-weight: normal;
  padding-left: 20px;
  font-size: 0.9rem;
}
.new-kid-school-year {
  width: 50%;
  margin: 0 auto;
}

.new-kid-consent p {
  margin-top: 0;
  padding-left: 15px;
  color: $primary;
}
.new-kid-consent p a {
  color: $primary-dark;
}
.change-avatar {
  width: 10vw;
  margin: 0 auto;
}
.change-avatar__button {
  margin-top: -20px;
}
.change-avatar button {
}
.change-avatar__img {
  width: 80%;
  margin: 0 auto;
}
.change-avatar img {
  width: 100%;
  border-radius: 20px;
}

</style>