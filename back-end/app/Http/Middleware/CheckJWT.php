<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class CheckJWT
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {

        // Elenco delle route da ignorare
        $routesToIgnore = ['cart.go-to-payment'];
        // Ottieni la route corrente
        $currentRoute = $request->route()->getName();
        // Se la route corrente è nell'elenco delle route da ignorare, passa la richiesta al prossimo middleware
        if (in_array($currentRoute, $routesToIgnore)) {
            return $next($request);
        }

        $token = $request->header('Authorization');

        if (!$token || !str_starts_with($token, 'Bearer ')) {
            return response()->json(['error' => 'JWT token not provided'], 401);
        }

        return $next($request);
    }
}
