<?php

namespace App\Http\Controllers\FrontEnd;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Mail;
use App\Http\Requests\ContactRequest;
use Throwable;

class ContactController extends Controller{

    public function send(ContactRequest $request)
    {
        $data = $request->validated();

        try {
            // Envoi de l'email
            Mail::send('email.contact', [
                'name'    => $data['name'],
                'email'   => $data['email'],
                'content' => $data['message'],
            ], function ($mail) use ($data) {
                $mail->to('ramananathumingthierry@gmail.com')
                     ->replyTo($data['email'], $data['name'])
                     ->subject('📩 Nouveau message depuis le portfolio');
            });

            // Retourner une réponse JSON avec un message de succès
            return response()->json(['message' => 'Votre message a bien été envoyé.'], 200);

        } catch (Throwable $e) {

            // En cas d'erreur, retourner une erreur JSON
            return response()->json([
            'message' => 'Erreur lors de l\'envoi du message.',
            'error' => $e->getMessage()], 500);
        }
    }

}
