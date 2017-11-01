<?php

class CollectionTest extends \PHPUnit_Framework_TestCase
{
    
    
    /** @test */
    public function empty_collection(){
        $collection = new \App\Support\Collection;

        $this->assertEmpty($collection->get());
    }

}