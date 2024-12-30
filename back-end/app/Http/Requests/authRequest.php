<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;


class AuthRequest extends FormRequest
{

    public function authorize(): bool
    {
        return true;
    }
    public function rules(): array
    {
        $routeName = $this->route()->getActionMethod();

        if($routeName == 'register'){
            return $this->register();
        }

        if($routeName == 'login'){
            return $this->login();
        }


        return match($this->method()){
            'POST' => $this->store(),
            'PUT', 'PATCH' => $this->update(),
            'DELETE' => $this->destroy(),
            default => $this->view()
        };
    }

    public function register()
    {
        return [
            'firstname' => 'required|string|max:255',
            'lastname' => 'required|string|max:255',
            'birth_date' => 'required|date',
            'gender'=> 'required|string',
            'phone_number'=> 'required|string|max:255',
            'country'=> 'required|string|max:255',
            'isVendor'=> 'nullable|boolean',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6|max:32',
        ];
    }

    public function login()
    {
        return [
            'email' => 'required|string|email',
            'password' => 'required|string',
        ];
    }
}
