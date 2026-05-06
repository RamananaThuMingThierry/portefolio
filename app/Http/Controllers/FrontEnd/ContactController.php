<?php

namespace App\Http\Controllers\FrontEnd;

use App\Http\Controllers\Controller;
use App\Http\Requests\ContactRequest;
use Illuminate\Support\Facades\Mail;
use Throwable;

class ContactController extends Controller
{
    public function send(ContactRequest $request)
    {
        $data = $request->validated();

        try {
            Mail::send('email.contact', [
                'name' => $data['name'],
                'email' => $data['email'],
                'content' => $data['message'],
            ], function ($mail) use ($data) {
                $mail->to('ramananathumingthierry@gmail.com')
                    ->replyTo($data['email'], $data['name'])
                    ->subject('Nouveau message depuis le portfolio');
            });

            return response()->json([
                'message' => 'Votre brief a bien ete envoye. Je vous repondrai des que possible.',
            ], 200);
        } catch (Throwable $e) {
            return response()->json([
                'message' => 'Le message na pas pu etre envoye pour le moment. Merci de reessayer dans un instant.',
                'error' => $e->getMessage(),
            ], 500);
        }
    }
}
