<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Log;

class UserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        $routeName = $this->route()->getActionMethod();

        if($routeName == 'saveShippingAddress'){
            Log::info('ciao');
            return $this->saveShippingAddress();
        }


        return match($this->method()){
            'POST' => $this->store(),
            'PUT', 'PATCH' => $this->update(),
            'DELETE' => $this->destroy(),
            default => $this->view()
        };
    }

    public function saveShippingAddress(){

        return [
            'firstname' => 'required|string',
            'lastname' => 'required|string',
            'address_line1' => 'required|string|max:255',
            'zip_code' => 'required|numeric|max:5',
            'country' => 'required|string',
            'city' => 'required|string',
            'province' => 'required|string',
            'phone_number' => 'required|string|max:255',
        ];
    }
}
