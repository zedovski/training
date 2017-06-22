<template>

	<div class='col-sm-6 col-sm-offset-3'>
		<h1>List of Books</h1>	
        		<ul>
			<li v-for='book in books'>
				<h3>{{book.title}}</h3>
				<p>by {{book.author_id}}</p>

				<p>{{book.description}}</p>
			</li>
            <table class="table table-bordered table-striped">

                <thead>
                <tr>
                  <td>
                      Title
                  </td>
                  <td>
                     Publication Date
                  </td>
                  <td>
                    Description
                  </td>
                </tr>
                </thead>

                <tbody>
                <tr v-for="book in books">
                  <td>{{ book.title }}</td>
                  <td>{{ book.publication_date }}</td>
                  <td>{{ book.description }}</td>
                </tr>
                </tbody>

            </table>

            <button v-on:click="getBooks()">Load Books</button>
		</ul>
	</div>

</template>

<script>

import axios from 'axios';

export default {
	name: 'books',
	components: {

	},
	data(){
		return {
			books: {},
			authors: [],
            searchQuery:null		}
	},
	beforeMount(){
		this.getBooks()
	},
	methods: {
		getBooks(){
            console.log("Inside getBOoks");
            axios.get('http://localhost:8000/books')
            .then(response => {
              // JSON responses are automatically parsed.
              console.log(response);
              this.books = response.data
            })
            
		}
	},
    computed: {
      filteredUsers: function () {
        var self = this;
        return self.books.filter(function (user) {
          return user.name.indexOf(self.searchQuery) !== -1
        })
      }
}
}
</script>