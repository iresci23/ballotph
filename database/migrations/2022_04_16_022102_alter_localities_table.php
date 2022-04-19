<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AlterLocalitiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('localities', function (Blueprint $table) {
            $table->id();
            $table->string('region');
            $table->string('province');
            $table->string('city_dist');
            $table->timestamps();
        });

        Schema::table('position_candidates', function (Blueprint $table) {
            $table->dropForeign('position_candidates_province_id_foreign');
            $table->dropForeign('position_candidates_city_id_foreign');
            $table->dropForeign('position_candidates_district_id_foreign');
            $table->dropColumn('province_id');
            $table->dropColumn('city_id');
            $table->dropColumn('district_id');
            $table->foreignId('locality_id')->nullable()->after('candidate_id')->constrained('localities');
        });

        Schema::dropIfExists('districts');
        Schema::dropIfExists('cities');
        Schema::dropIfExists('provinces');
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
