<?php

namespace App\Http\Controllers\FrontEnd;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Mail;
use App\Http\Requests\ContactRequest;

class ContactController extends Controller{

    public function send(ContactRequest $request)
    {
        $data = $request->validated();
    
        Mail::send('email.contact', [
            'name'    => $data['name'],
            'email'   => $data['email'],
            'content' => $data['message'],
        ], function ($mail) use ($data) {
            $mail->to('ramananathumingthierry@gmail.com')
                 ->replyTo($data['email'], $data['name'])
                 ->subject('📩 Nouveau message depuis le portfolio');
        });
    
        return back()->with('success', 'Votre message a bien été envoyé.');
    }
    
}