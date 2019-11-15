<template>
  <div id="contacts" class="contacts-wrapper">
    <div class="grid-wrapper">
      <div class="grid-row -padded">
        <div class="grid-column -thirtyFive">
          <div class="contacs-info">
            <div class="__title -ginormous">
              contact us.
            </div>
            <div class="__subtitle -light">
              Playground srl<br/>
              Via G. Mazzini 3/C,<br/>
              Cernusco Sul Naviglio (Milano)<br/>
              -<br/>
              T +39 0240706003
            </div>
          </div>
        </div>
        <div class="grid-column -sixtyFive">
          <form class="contacts-form">
            <div class="grid-row"
              :class="[isMobile ? '': '-gutted']"
            >
              <div class="grid-column">
                <div class="input-wrapper"
                  :class="{ 'has-error': $v.name.$error }"
                >
                  <input
                    v-model.trim="$v.name.$model"
                    type="text"
                    name="name"
                    placeholder="name"
                    class="__input"
                    :class="{
                      '-error': !$v.name.minLength | !$v.name.alpha,
                      '-success' : $v.name.$dirty && $v.name.alpha && $v.name.$model,
                    }"
                    :minlength="nameMinLenght"
                  >
                  <div
                    v-if="!$v.name.minLength"
                    class="error-msg"
                  >
                    Name too short
                  </div>
                  <div
                    v-if="!$v.name.alpha"
                    class="error-msg"
                  >
                    Please insert a valid name
                  </div>
                </div>
              </div>
              <div class="grid-column">
                <div class="input-wrapper"
                  :class="{ 'has-error': $v.lastname.$error }"
                >
                  <input
                    v-model.trim="$v.lastname.$model"
                    type="text"
                    name="lastname"
                    placeholder="last name"
                    class="__input"
                    :class="{
                      '-error': !$v.lastname.minLength | !$v.lastname.alpha,
                      // eslint-disable-next-line
                      '-success' : $v.lastname.$dirty && $v.lastname.alpha && $v.lastname.$model,
                    }"
                    :minlength="lastnameMinLenght"
                  >
                  <div
                    v-if="!$v.lastname.minLength"
                    class="error-msg"
                  >
                    Last name too short
                  </div>
                  <div
                    v-if="!$v.lastname.alpha"
                    class="error-msg"
                  >
                    Please insert a valid last name
                  </div>
                </div>
              </div>
            </div>
            <div class="grid-row">
              <div class="grid-column">
                <div class="input-wrapper"
                  :class="{ 'has-error': $v.email.$error }"
                >
                  <input
                    v-model.trim="$v.email.$model"
                    type="email"
                    name="email"
                    placeholder="email"
                    class="__input"
                    :class="{
                      '-error': ($v.email.$dirty && !$v.email.required)
                        | ($v.email.$dirty && !$v.email.email),
                      '-success' : $v.email.$dirty && $v.email.email
                    }"
                    required
                  >
                  <div
                    v-if="$v.email.$dirty && !$v.email.required"
                    class="error-msg"
                  >
                    Mail needed
                  </div>
                  <div
                    v-if="!$v.email.email"
                    class="error-msg"
                  >
                    Please insert a valid mail
                  </div>
                </div>
              </div>
            </div>
            <div class="grid-row">
              <div class="grid-column">
                <div class="input-wrapper"
                  :class="{ 'has-error': $v.message.$error }"
                >
                  <textarea
                    id="message"
                    cols="30"
                    rows="10"
                    v-model.trim="$v.message.$model"
                    name="message"
                    placeholder="message"
                    class="__input"
                    :class="{
                      '-error': ($v.message.$dirty && !$v.message.required)
                        | ($v.message.$dirty && !$v.message.minLength),
                      '-success' : $v.message.$dirty && $v.message.minLength
                    }"
                    required
                    :minlength="messageMinLenght"
                  >
                  </textarea>
                  <div
                    v-if="$v.message.$dirty && !$v.message.required"
                    class="error-msg"
                  >
                    Mmessage needed
                  </div>
                  <div
                    v-if="!$v.message.minLength"
                    class="error-msg"
                  >
                    Please insert a longer message
                  </div>
                </div>
              </div>
            </div>
            <button class="__btn -inverted"
              :class="[isMobile ? '-full': '']"
            >
              Send
              <font-awesome-icon :icon="['fas', 'angle-right']"></font-awesome-icon>
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  required,
  email,
  alpha,
  minLength,
} from 'vuelidate/lib/validators';

export default {
  name: 'contacts',
  data() {
    return {
      nameMinLenght: 3,
      lastnameMinLenght: 4,
      messageMinLenght: 50,
      name: '',
      lastname: '',
      email: '',
      message: '',
    };
  },
  props: {
    isMobile: {
      type: Boolean,
      required: true,
    },
  },
  validations() {
    return {
      name: {
        alpha,
        minLength: minLength(this.nameMinLenght),
      },
      lastname: {
        alpha,
        minLength: minLength(this.lastnameMinLenght),
      },
      email: {
        required,
        email,
      },
      message: {
        required,
        minLength: minLength(this.messageMinLenght),
      },
    };
  },
};
</script>
