<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddIndexToLocalitiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('localities', function (Blueprint $table) {
            $table->integer('prov_saggunian_member_limit');
            $table->integer('city_saggunian_member_limit');
            $table->index(['region', 'province', 'city_dist']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('localities', function (Blueprint $table) {
            //
        });
    }
}
