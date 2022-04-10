<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CreatePositionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('positions', function (Blueprint $table) {
            $table->id();
            $table->string('slug')->unique();
            $table->string('name');
            $table->string('type');
            $table->tinyInteger('voting_limit');
            $table->tinyInteger('order');
        });

        //seed
        $positions = [
            [
                'slug' => 'president',
                'name' => 'President',
                'type' => 'national',
                'voting_limit' => 1,
                'order' => 1,
            ],
            [
                'slug' => 'vice_president',
                'name' => 'Vice President',
                'type' => 'national',
                'voting_limit' => 1,
                'order' => 2,
            ],
            [
                'slug' => 'senator',
                'name' => 'Senator',
                'type' => 'national',
                'voting_limit' => 12,
                'order' => 3,
            ],
            [
                'slug' => 'house_representative',
                'name' => 'Member, House of Representatives',
                'type' => 'local',
                'voting_limit' => 1,
                'order' => 4,
            ],
            [
                'slug' => 'governor',
                'name' => 'Provincial Governor',
                'type' => 'local',
                'voting_limit' => 1,
                'order' => 5,
            ],
            [
                'slug' => 'vice_governor',
                'name' => 'Provincial Vice Governor',
                'type' => 'local',
                'voting_limit' => 1,
                'order' => 6,
            ],
            [
                'slug' => 'prov_saggunian_member',
                'name' => 'Member, Sangguniang Panlalawigan',
                'type' => 'local',
                'voting_limit' => 2,
                'order' => 7,
            ],
            [
                'slug' => 'mayor',
                'name' => 'Mayor',
                'type' => 'local',
                'voting_limit' => 1,
                'order' => 8,
            ],
            [
                'slug' => 'vice_mayor',
                'name' => 'Vice Mayor',
                'type' => 'local',
                'voting_limit' => 1,
                'order' => 9,
            ],
            [
                'slug' => 'city_saggunian_member',
                'name' => 'Member, Sangguniang Bayan',
                'type' => 'local',
                'voting_limit' => 8,
                'order' => 10,
            ],
            [
                'slug' => 'partylist',
                'name' => 'Party List',
                'type' => 'national',
                'voting_limit' => 1,
                'order' => 11,
            ],
        ];

        foreach ($positions as $position) {
            DB::table('positions')->insert($position);
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('positions');
    }
}
