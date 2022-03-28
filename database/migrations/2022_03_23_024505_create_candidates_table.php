<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCandidatesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('candidates', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('profile_url')->nullable();
            $table->timestamps();
        });

        Schema::create('position_candidates', function (Blueprint $table) {
            $table->id();
            $table->integer('election_year')->default(2022);
            $table->foreignId('position_id')->constrained('positions');
            $table->foreignId('candidate_id')->constrained('candidates');
            $table->tinyInteger('ballot_number');
            $table->string('party')->nullable();
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
        Schema::dropIfExists('candidates');
        Schema::dropIfExists('position_candidates');
    }
}
