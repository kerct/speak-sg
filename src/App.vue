<template>
  <div id="app">
    <b-navbar toggleable="md" type="light" variant="light">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-nav @click="routeHome">
        <img src="./assets/logo.png" width="30" height="30" exact :style="{ cursor: 'pointer'}">
      </b-navbar-nav>
      <b-collapse is-nav id="nav_collapse">
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
          </b-nav-form>
          <b-nav-item>
            <b-button @click="showModal" size="sm" variant="success">Post Question</b-button>
          </b-nav-item>
          <b-nav-item>
            <img src="./assets/logo.png" width="30" height="30" exact :style="{ cursor: 'pointer'}">
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view/>

    <b-modal ref="myModalRef" hide-footer hide-header>
      <b-form @submit="onPost">
        <b-form-group label="Question" class="font-weight-bold">
          <b-form-textarea
            v-model="question.title"
            required
            placeholder="Begin your question with &quot;What&quot;, &quot;How&quot;, &quot;Why&quot;, etc."
            :rows="3"
            :max-rows="3"
          ></b-form-textarea>
        </b-form-group>

        <b-form-group label="Description" class="font-weight-bold">
          <b-form-textarea
            v-model="question.description"
            placeholder="Optional"
            :rows="6"
            :max-rows="6"
          ></b-form-textarea>
        </b-form-group>

        <b-form-group>
          <toggle-button class="toggle" :value="question.poll" @change="question.poll = $event.value"/>Turn on Poll
          <b-form-group v-if="question.poll">
            <b-input-group v-for="(option, index) of question.options" :key="index">
              <b-form-input type="text" :name="`Option ${index + 1}`" :placeholder="`Option ${index + 1}`"
                v-model="question.options[index]"></b-form-input>
              <b-button size="sm" variant="danger" @click="removePollOption(index)"
                v-if="question.options.length > 2">Delete</b-button>
            </b-input-group>
            <b-button size="sm" @click="addPollOption()">Add Option</b-button>
          </b-form-group>
        </b-form-group>

        <b-button class="btn btn-space float-right" type="submit" variant="success">Post Question</b-button>
        <b-button class="btn btn-space float-right" @click="hideModal" variant="light">Cancel</b-button>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
import Home from "./components/Home.vue";
import Thread from "./components/Thread.vue";

export default {
  name: "app",
  components: {
    Home,
    Thread
  },
  data() {
    return {
      question: {
        title: "",
        description: "",
        poll: false,
        options: ["", ""]
      }
    };
  },
  methods: {
    routeHome() {
      this.$router.push("/");
    },
    showModal() {
      this.$refs.myModalRef.show();
    },
    hideModal() {
      this.$refs.myModalRef.hide();
      this.question.title = "";
      this.question.description = "";
      //this.question.poll = false;
      this.question.options = ["", ""];
    },
    onPost(evt) {
      evt.preventDefault();
      //Home.data.questions.push({ title: this.question.title, ups: 0 });
      alert(JSON.stringify(this.question));
      this.hideModal();
    },
    addPollOption() {
      this.question.options.push("");
    },
    removePollOption(index) {
      this.question.options.splice(index, 1);
    }
  }
};
</script>

<style>
.btn-space {
  margin-left: 10px;
}

.toggle {
  margin-top: 5px;
  margin-right: 10px;
}
</style>
