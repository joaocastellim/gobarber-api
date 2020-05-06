import ICreateAppointmentDTO from '@modules/appointments/dtos/ICreateAppointmentDTO';
import Appointment from '../typeorm/entities/Appointment';

export interface IAppointmentsRepository {
  create(data: ICreateAppointmentDTO): Promise<Appointment>;
  findByDate(date: Date): Promise<Appointment | undefined>;
}
