<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProdajnaPrilikasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('prodajna_prilikas', function (Blueprint $table) {
            $table->id();
            $table->foreignId('client_id');
            $table->foreignId('prodavac_id');
            $table->string('status');
            $table->text('napomena')->nullable();
            $table->decimal('ocekivaniIznos', 8, 2)->nullable();  
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('prodajna_prilikas');
    }
}
