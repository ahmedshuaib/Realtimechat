<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>ChatBot</title>
    <link rel="stylesheet" href={{ asset('css/app.css')}}>
    <style>
        .list-group {
            overflow-y: auto;
            height: 300px;
        }
    </style>
</head>
<body>
    <div id="app">
        <div class="pt-5"></div>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="card border-0">
                        <div class="card-header text-white bg-primary">Chat Application</div>
                        <div class="offset-12">
                            <ul class="list-group" v-chat-scroll="{ always: false, smooth: true}">
                                <message v-for="item, index in chat.history"
                                         v-bind:key="item.id" :user="chat.user[index]"
                                         :color="chat.color[index]">
                                @{{ item }}</message>
                            </ul>
                        </div>

                        <input type="text" class="form-control" placeholder="Type your message" v-model="message" @keyup.enter="send">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src={{ asset('js/app.js')}}></script>
</body>
</html>
