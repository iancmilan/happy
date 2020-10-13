import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';
import Image from './Image';

@Entity('orphanages')

export default class Orphanage {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    latitude: string;

    @Column()
    longitude: string;

    @Column()
    about: string;

    @Column()
    instructions: string;

    @Column()
    opening_hours: string;

    @Column()
    open_on_weekends: boolean;

    @OneToMany(() => Image, image => image.orphanage, {
        cascade: ['insert', 'update'] //se eu criar ou atualizar um orfanato o cascade vai automaticamente cadastrar ou atualizar as imagens que estão relacionadas ao orfanato
    })
    @JoinColumn({ name: 'orphanage_id' })
    images: Image[]
}