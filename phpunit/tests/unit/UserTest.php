<?php

class UserTest extends \PHPUnit_Framework_TestCase
{
    public function testThatWeCanGetTheFirstName()
    {
        $user = new \App\Models\User;
        $user->setFirstName('Billy');
        $this->assertEquals($user->getFirstName(), "Billy");
    }

    public function testThatWeCanGetTheLastName()
    {
        $user = new \App\Models\User;
        $user->setLastName('Kratina');
        $this->assertEquals($user->getLastName(), "Kratina");
    }


    public function testFullNameIsReturned(){
        $user = new \App\Models\User;
        $user->setFirstName('Josef');
        $user->setLastName('Hruby');

        $this->assertEquals($user->getFullName(), "Josef Hruby");


    }

    public function testFirstAndLastNameAreTrimmed()
    {
        $user = new \App\Models\User;
        $user->setFirstName(' Josef  ');
        $user->setLastName('  Hruby  ');
        $this->assertEquals($user->getFirstName(), 'Josef');
        $this->assertEquals($user->getLastName(), "Hruby");
    }

    public function testEmailAddressIsSet(){
        $user = new \App\Models\User;
        $user->setEmail('josef@hruby.cz');

        $this->assertEquals($user->getEmail(), "josef@hruby.cz");
    }

    public function testEmailIsValid(){
        
        // $this->assertArrayHasKey
        
    }
}