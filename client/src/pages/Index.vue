<template>
  <q-page>
    <q-card>
      <q-separator />
      <q-tabs
        v-model="tab"
        dense
        class="bg-grey-3"
        align="justify"
        narrow-indicator>
        <q-tab name="Users" label="Users" />
        <q-tab name="movies" label="Movies" />
      </q-tabs>
      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="Users">
          <div class="text-h6">Users</div>
          <q-list separator>
      <q-item-label header>Users</q-item-label>
      <q-item
        v-for='user in users'
        :key='user.id'
        :to='`/users/${user.id}`'
        exact
        clickable
        v-ripple>
        <q-item-section side top>{{user.id}}</q-item-section>
        <q-item-section>
          <q-item-label><strong>Occupation: </strong>{{user.occupation | occupation}}</q-item-label>
          <q-item-label><strong>Age Group: </strong>{{user.age}}</q-item-label>
          <q-item-label><strong>Gender: </strong>{{user.gender}}</q-item-label>
          <q-item-label><strong>Zip Code: </strong>{{user.zipCode}}</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-item-label>{{user.updatedAt | formatDate('MMM DD, YYYY')}}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </q-tab-panel>
      <q-tab-panel name="movies">
          <div class="text-h6">Movies</div>
          <q-list separator>
            <q-item-label header>Movies</q-item-label>
              <q-item
                v-for='movie in movies'
                :key='movie.id'
                :to='`/movies/${movie.id}`'
                exact
                clickable
                v-ripple>
              <q-item-section side>{{movie.id}}</q-item-section>
              <q-item-section>
                <q-item-label><strong>Title: </strong>{{movie.title}}</q-item-label>
                <q-item-label >
                  <strong>Genres: </strong>{{displaygeneres(movie.genres)}}
                </q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-item-label>{{movie.createdAt | formatDate('MMM DD, YYYY')}}</q-item-label>
              </q-item-section>
              </q-item>
          </q-list>
        </q-tab-panel>
      </q-tab-panels>
      </q-card>
    <!-- <q-list separator>
      <q-item-label header>Users</q-item-label>
      <q-item
        v-for='user in users'
        :key='user.id'
        :to='`/users/${user.id}`'
        exact
        clickable
        v-ripple>
        <q-item-section side top>{{user.id}}</q-item-section>
        <q-item-section>
          <q-item-label><strong>Occupation: </strong>{{user.occupation | occupation}}</q-item-label>
          <q-item-label><strong>Age Group: </strong>{{user.age}}</q-item-label>
          <q-item-label><strong>Gender: </strong>{{user.gender}}</q-item-label>
          <q-item-label><strong>Zip Code: </strong>{{user.zipCode}}</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-item-label>{{user.updatedAt | formatDate('MMM DD, YYYY')}}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list> -->
    <!-- <q-list separator>
      <q-item-label header>Movies</q-item-label>
      <q-item
        v-for='movie in movies'
        :key='movie.id'
        :to='`/movies/${movie.id}`'
        exact
        clickable
        v-ripple>
        <q-item-section side>{{movie.id}}</q-item-section>
        <q-item-section>
          <q-item-label><strong>Title: </strong>{{movie.title}}</q-item-label>
          <q-item-label >
            <strong>Genres: </strong>{{displaygeneres(movie.genres)}}
          </q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-item-label>{{movie.createdAt | formatDate('MMM DD, YYYY')}}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list> -->
    <q-inner-loading :showing='loading' color='primary'/>
  </q-page>
</template>

<style>
</style>

<script>
import { mapState } from 'vuex'
import { date } from 'quasar'
export default {
  name: 'PageIndex',
  data () {
    return {
      tab: 'movies'
    }
  },
  created () {
    if (!this.users.length) {
      this.$store.dispatch('imdb/FIND_USERS', {
        limit: 50
      })
    }
    if (!this.movies.length) {
      this.$store.dispatch('imdb/FIND_MOVIES', {
        limit: 50
      })
    }
  },
  methods: {
    displaygeneres (item) {
      return item.map(x => x.name).join(', ')
    }
  },
  filters: {
    occupation: function (value) {
      switch (value) {
        case '0': return 'other'
        case '1': return 'academic/educator'
        case '2': return 'artist'
        case '3': return 'clerical/admin'
        case '4': return 'college/grad student'
        case '5': return 'customer service'
        case '6': return 'doctor/health care'
        case '7': return 'executive/managerial'
        case '8': return 'farmer'
        case '9': return 'homemaker'
        case '10': return 'K-12 Student'
        case '11': return 'lawyer'
        case '12': return 'programmer'
        case '13': return 'retired'
        case '14': return 'sales/marketing'
        case '15': return 'scientist'
        case '16': return 'self-employed'
        case '17': return 'technician/engineer'
        case '18': return 'tradesman/craftsman'
        case '19': return 'unemployed'
        case '20': return 'writer'
        default: return 'not specified'
      }
    },
    formatDate: date.formatDate
  },
  computed: {
    ...mapState('imdb', {
      users: state => state.users.list,
      loading: state => state.users.loading,
      movies: state => state.movies.list
    })
  }
}
</script>
