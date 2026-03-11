<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ContactRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['required','string','max:255'],
            'email' => ['required','email'],
            'message' => ['required','string']
        ];
    }

    public function messages(): array
    {
        return [
            'name.required' => 'Le champ nom est obligatoire.',
            'name.string'   => 'Le nom doit être une chaîne de caractères valide.',
            'name.max'      => 'Le nom ne doit pas dépasser 255 caractères.',
    
            'email.required' => 'Le champ email est obligatoire.',
            'email.email'    => 'Veuillez saisir une adresse email valide.',
    
            'message.required' => 'Le message est obligatoire.',
            'message.string'   => 'Le message doit être un texte valide.',
        ];
    }
}
