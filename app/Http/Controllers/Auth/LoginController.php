<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;

/**
 * Class LoginController
 * @group Login
 * @package App\Http\Controllers\Auth
 */
class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    /**
     * Redirect the user to the Social authentication page.
     *
     * @param  string $provider
     * @return \Illuminate\Http\Response
     */
    public function redirectToProvider($provider)
    {
        return Socialite::driver($provider)->redirect();
    }

    /**
     * Obtain the user information from the social login.
     *
     * @param  string $provider
     * @return \Illuminate\Http\Response
     */
    public function handleProviderCallback($provider)
    {
        $socialUser = Socialite::driver($provider)->user();


        $user = User::where('provider', $provider)->where('provider_id', $socialUser->getId())->first();
        // $user->token;

        $user = User::where('provider', $provider)->where('provider_id', $socialUser->getId())->first();
        // $user->token;
        $parts = explode("@", $socialUser->getEmail());
        $username = $parts[0];
        if ($socialUser->getNickname() != null) {
            $username = $socialUser->getNickname();
        }


        if (!$user)
            $user = User::create([
                'name' => $socialUser->getName(),
                'username' => $username,
                'email' => $socialUser->getEmail(),
                'password',
                'tutorial',
                'provider_id' => $socialUser->getId(),
                'provider' => $provider
            ]);

        Auth::login($user, true);

        return redirect($this->redirectTo);
    }

}
