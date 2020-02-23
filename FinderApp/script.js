$(document).ready(function() {
    // console.log('connected')
    $("#searchUser").on('keyup', function(e) {
        // console.log(e.target.value)
        let name = e.target.value;
        $.ajax({
            url: "https://api.github.com/users/" + name,
            data: {
                client_id: "3656aeb29343569fac3e",
                client_secret: "1dbddb46c533931d2ac17e7da46fbe3161568a11"
            }
        }).done(function(user) {
            $.ajax({
                url: "https://api.github.com/users/" + name + "/repos",
                data: {
                    client_id: "3656aeb29343569fac3e",
                    client_secret: "1dbddb46c533931d2ac17e7da46fbe3161568a11",
                    sort: 'created:asc',
                    per_page: 7
                }
            }).done(function(repos) {
                // console.log(repos)
                repos.forEach(function(repo) {
                    // console.log(repo)
                    $('#repos').append(`
                        <div class="card card-body bg-light">
                            <div class="row">
                                <div class="col-md-7">
                                    <strong>${repo.name}: </strong>${repo.description}
                                </div>
                                <div class="col-md-3">
                                    <span class="label btn-danger mr-2">Forks: ${repo.forks_count}</span>
                                    <span class="label btn-primary mr-2">Watchers: ${repo.watchers_count}</span>
                                    <span class="label btn-success">Stars: ${repo.stargazers_count}</span>
                                </div>
                                <div class="col-md-2">
                                    <a target="_blank" class="btn btn-primary" href="${repo.html_url}">View Repo</a>
                                </div>
                            </div>
                        </div>
                    `)
                })
            })
            $('#profile').html(`
                <div class="panel panel-default">
                    <div class="panel-heading">
                    <h3 class="panel-title">${user.name}</h3>
                    </div>
                    <div class="panel-body">
                        <div class="row">
                            <div class="col-md-3">
                                <img class="thumbnail" src="${user.avatar_url}" style="width:100%;">
                                <a target="_blank" class="btn btn-primary btn-block" href="${user.html_url}">View Profile</a>
                            </div>
                            <div class="col-md-9">
                                <span class="label btn-danger mr-2">Public Repos: ${user.public_repos}</span>
                                <span class="label btn-primary mr-2">Public Gist: ${user.public_gists}</span>
                                <span class="label btn-success mr-2">Followers: ${user.followers}</span>
                                <span class="label btn-info">Following: ${user.following}</span>
                                <br><br>  
                                <ul class="list-group">
                                    <li class="list-group-item">Company: ${user.company}</li>
                                    <li class="list-group-item">Website/Blog: ${user.blog}</li>
                                    <li class="list-group-item">Location: ${user.location}</li>
                                    <li class="list-group-item">Member Since: ${user.created_at}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                 </div>
                 <h3 class="page-header">Latest Repos</h3>
                 <div id="repos"></div>
            `)
        })
    })
})